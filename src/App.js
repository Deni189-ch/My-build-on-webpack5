import React from "react";

import { TestComponents } from '@components/Test.tsx'

import RenaultAustral from '@images/renault_austral.webp'
import ChampagneJpeg from '@images/champagne.jpeg'
import DownloadPng from '@images/download.png'
import ArchiveSvg from '@images/archive.svg'
import FaviconIco from '@images/favicon.ico'
import LapTopJpg from '@images/lap-top.jpg'
import CotGif from '@images/200w.gif'

export const App = () => {
  console.log('process.env', process.env.SECRET_KEY)
  return (
    <div className='app'>
      <h1>
        Build webpack5
      </h1>

      <div>
        <h2>Test images:</h2>
        <hr/>
        <p>SVG:</p>
        <img src={ArchiveSvg} alt="svg"/>
        <hr/>
        <p>PNG:</p>
        <img src={DownloadPng} alt="png"/>
        <hr/>
        <p>ICO:</p>
        <img src={FaviconIco} alt="ico"/>
        <hr/>
        <p>GIF:</p>
        <img src={CotGif} alt="gif"/>
        <hr/>
        <p>WEBP:</p>
        <img src={RenaultAustral} alt="webp"/>
        <hr/>
        <p>JPG:</p>
        <img src={LapTopJpg} alt="jpg"/>
        <hr/>
        <p>JPEG:</p>
        <img src={ChampagneJpeg} alt="jpeg"/>
        <hr/>
        <TestComponents />
      </div>

    </div>
  );
}
