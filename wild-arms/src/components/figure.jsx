import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption }) {
  return (
    <figure>
      <a href={useBaseUrl(src)} target="_blank">
        <img style={{ display: 'block' }} src={useBaseUrl(src)} alt={caption} />
        <figcaption style={{ textAlign: 'center' }}>{`${caption}`}</figcaption>
      </a>
    </figure>
  )
}
