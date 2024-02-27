'use client'

import { cn } from '@/libs/utils'
import { ImageUpIcon, Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

interface FileDropzoneProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  imageSrc?: string
  onImageChange?: (file: string) => void
}

export const ImageUploaderDropzone = ({
  imageSrc = '',
  onImageChange,
  ...props
}: FileDropzoneProps) => {
  const [isUploading, setIsUploading] = React.useState(false)
  const [imageUrl, setImageUrl] = React.useState(imageSrc)

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true)
      if (e.target.files && e.target.files[0]) {
        const localUrl = URL.createObjectURL(e.target.files[0])
        setImageUrl(localUrl)
        onImageChange?.(localUrl)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="relative grid h-48 w-full place-items-center overflow-hidden rounded-md border border-input bg-background">
      <input
        type="file"
        className={cn(
          'absolute inset-0 z-10 text-transparent file:sr-only',
          props.className,
        )}
        accept="image/*"
        onChange={handleImageChange}
        {...props}
      />

      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        {isUploading ? (
          <>
            <Loader2Icon className="h-10 w-10 animate-spin stroke-1 text-primary" />
            <p className="max-w-64 text-center text-sm">Uploading image...</p>
          </>
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            className="w-full object-cover object-center"
            alt="Image"
            fill
          />
        ) : (
          <>
            <ImageUpIcon className="h-10 w-10 stroke-1 text-muted-foreground/80" />
            <p className="max-w-64 text-center text-sm">
              Drag and drop your image here, or click to select
            </p>
          </>
        )}
      </div>
    </div>
  )
}
