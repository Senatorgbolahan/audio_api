import React from "react";
import Audio from './Audio'

export default function AudioList({audios, loading}) {
  
  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (audios.length < 1) {
    return <h2 className="section-title">no audio matched your search criteria</h2>
  }
  return (
    <section className="section-title">
        <h2 className="section-title">audios</h2>
        <div className="cocktails-center">
          {audios.map((item) => {
            return <Audio key={item.id} {...item}/>
          })}
        </div>
    </section>
  )
}
