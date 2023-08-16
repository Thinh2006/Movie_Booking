import React from 'react'
import Chair from './Chair'
import cn from 'classnames'

const ChairList = ({data}) => {
  return (
    <div>
        {data.map((hangghe)=>{
            return (
                <div className="d-flex gap-3 justify-content-center" key={hangghe.hang} style={{}}>
                    <div className='d-flex align-items-center mt-3 fw-bold' style={{width: 30, color:'red'}}>
                        {hangghe.hang}
                    </div>
                    {hangghe.danhSachGhe.map((ghe)=>{
                        return(<Chair ghe={ghe} key={ghe.soGhe} className={cn({borderless : !hangghe.hang})} />)
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default ChairList