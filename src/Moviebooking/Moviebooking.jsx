import React from 'react'
import data from './danhSachGhe.json'
import ChairList from './ChairList'
import Result from './Result'

const Moviebooking = () => {
  return (
    <div style={{backgroundImage: 'url(./images/bgmovie.jpg)'}} className='Moviebooking'>
        <div className="overlay"></div>
        <div className='row'>
            <div className="col-8 ">
                <h1 className='text-warning fw-bold'>Đặt vé xem phim Cyber Movie</h1>
                <div className="bg-secondary text-white rounded fs-4 mt-4 mx-auto" style={{width:'50vw'}}>Màn hình</div>
                <ChairList data = {data}/>
            </div>
            <div className="col-4">
                <Result/>
            </div>
        </div>
    </div>

  )
}

export default Moviebooking