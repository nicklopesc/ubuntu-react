
import Video1 from '../../player/video1.mp4';
import Video2 from '../../player/video2.mp4';
import Video3 from '../../player/video3.mp4';
import Video4 from '../../player/video4.mp4';

function Musical() {
  return (
    <div className="musical">
      <div className="videos">
      
        <h2>Vídeos de Cantigas Africanas/Afro-brasileiras</h2>
        <p>Devido a falta de vídeos de cantigas Africanas/Afro-brasileiras com direitos autorais liberados,
          foram usados outros tipos de vídeos.
        </p>
      </div>

      <div className="video1">
        <video controls autoPlay 
        src={Video1}
        type="video/mp4"
        />
        <p>Canção A - Ypsilon</p>
      </div>

      <div className="video2">
        <h3></h3>
        <video controls 
        src={Video2}
        type="video/mp4"
        />
        <p>Canção B - Ypsilon</p>
      </div>

      <div className="video3">
        <h3></h3>
        <video controls 
        src={Video3}
        type="video/mp4"
        />
        <p>Canção C - Ypsilon</p>
      </div>

      <div className="video4">
        <h3></h3>
        <video controls 
        src={Video4}
        type="video/mp4"
        />
        <p>Canção D - Ypsilon</p>
      </div>
      </div>

  );
}

export default Musical;
