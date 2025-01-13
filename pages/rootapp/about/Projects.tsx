import restService from '@/lib/service'
import { PlayCircleFilled } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState('')

  const handlePlay = (videoUrl: string) => {
    if (!videoUrl) {
      console.error('Invalid video URL')
      return
    }
    setCurrentVideo(videoUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setCurrentVideo('')
    setIsModalOpen(false)
  }

  const closeModalOnBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: restService.projects,
  })

  const getYouTubeThumbnail = (videoUrl: string) => {
    if (!videoUrl) {
      console.error('Invalid video URL:', videoUrl)
      return '/default-thumbnail.jpg' // Provide a valid default thumbnail URL
    }

    try {
      const url = new URL(videoUrl)

      // For youtu.be short URLs
      if (url.hostname === 'youtu.be') {
        const videoId = url.pathname.split('/')[1]
        if (!videoId) throw new Error('Video ID not found')
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      }

      // For youtube.com URLs
      else if (url.hostname.includes('youtube.com')) {
        const videoId = url.searchParams.get('v')
        if (!videoId) throw new Error('Video ID not found')
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      }

      // Invalid URL
      else {
        throw new Error('Invalid YouTube URL')
      }
    } catch (error) {
      console.error('Error parsing video URL:', error)
      return '/default-thumbnail.jpg' // Return default image on error
    }
  }

  return (
    <div className="wrapper text-white sm:pt-[37px] pt-[59px]">
      <p className="sm:text-center sm:text-[32px] tracking-wide sm:tracking-wider">
        Our Best Projects
      </p>
      <div className="gap-x-4 sm:gap-x-[46px] mt-4 sm:mt-[52px] gap-y-2 sm:gap-y-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="relative w-full h-[200px] sm:h-[250px] bg-gray-700 rounded-lg animate-pulse"
              ></div>
            ))
          : projects &&
            projects.slice(0, 5).map((project,index) => (
              <div key={project.id} className="relative">
                <div
                  className="cursor-pointer relative w-full h-[200px] sm:h-[250px] rounded-lg overflow-hidden"
                  onClick={() => handlePlay(project.video_url)}
                >
                   <iframe
          className="absolute inset-0 w-full h-full"
          src={project.video_url}
          title={project.name}
          allowFullScreen
          frameBorder="0"
          
        ></iframe>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                    <PlayCircleFilled className="text-[50px] sm:text-[54px] md:text-[57px] lg:text-[67px] text-white opacity-80" />
                    <p className="text-[12px] sm:text-xl">{project.name}</p>
                  </div>
                </div>
                <div className="text-center mt-2"></div>
              </div>
            ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModalOnBackgroundClick} // Close modal on background click
        >
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`${currentVideo}?autoplay=1`}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-red-500 w-8 h-8 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
