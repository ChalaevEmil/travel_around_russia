import './Photo-grid.css'
import grid1 from '../../image/photo-grid/grid1.jpg'
import grid2 from '../../image/photo-grid/grid2.jpg'
import grid3 from '../../image/photo-grid/grid3.jpg'
import grid4 from '../../image/photo-grid/grid4.jpg'
import grid5 from '../../image/photo-grid/grid5.jpg'
import grid6 from '../../image/photo-grid/grid6.jpg'
import grid7 from '../../image/photo-grid/grid7.jpg'
import grid8 from '../../image/photo-grid/grid8.jpg'
import grid9 from '../../image/photo-grid/grid9.jpg'
import grid10 from '../../image/photo-grid/grid10.jpg'
import grid11 from '../../image/photo-grid/grid11.jpg'
import grid12 from '../../image/photo-grid/grid12.jpg'

export default function Photo(){
    return(
        <section class="photo-grid">
          <img class="photo-grid__item" alt="Фото1" src={grid1}/>
          <img class="photo-grid__item" alt="Фото2" src={grid2}/>
          <img class="photo-grid__item" alt="Фото3" src={grid3}/>
          <img class="photo-grid__item" alt="Фото4" src={grid4}/>
          <img class="photo-grid__item" alt="Фото5" src={grid5}/>
          <img class="photo-grid__item" alt="Фото6" src={grid6}/>
          <img class="photo-grid__item" alt="Фото7" src={grid7}/>
          <img class="photo-grid__item" alt="Фото8" src={grid8}/>
          <img class="photo-grid__item" alt="Фото9" src={grid9}/>
          <img class="photo-grid__item" alt="Фото10" src={grid10}/>
          <img class="photo-grid__item" alt="Фото11" src={grid11}/>
          <img class="photo-grid__item" alt="Фото12" src={grid12}/>
        </section>
    )
}