import React from 'react'

type Props = { title: string; description: string }

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}