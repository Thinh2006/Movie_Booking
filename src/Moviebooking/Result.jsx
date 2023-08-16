import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingaction } from '../store/Moviebooking/slice'

const Result = () => {
    const dispatch = useDispatch()
    const {bookingChairs} = useSelector((state)=>state.movieBooking)
    console.log('bookingChairs',bookingChairs)
    return (
        <div className='my-4 p-3 text-white'>
            <h3>Danh sách ghế bạn đã chọn</h3>
            <div className="d-flex gap-3 mt-3">
                <div className="Chair booked"></div>
                <p style={{lineHeight:2}}>Ghế đã đặt</p>
            </div>
            <div className="d-flex gap-3 mt-3">
                <div className="Chair booking"></div>
                <p style={{lineHeight:2}}>Ghế đang chọn</p>
            </div>
            <div className="d-flex gap-3 mt-3">
                <div className="Chair"></div>
                <p style={{lineHeight:2}}>Ghế chưa đặt</p>
            </div>

            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingChairs.map((chair)=> {
                        return (
                            <tr key={chair.soGhe}>
                            <td>{chair.soGhe}</td>
                            <td className='fw-bold text-warning'>{chair.gia}</td>
                            <td className='text-danger fw-bold' style={{cursor: 'pointer'}} onClick={()=>{dispatch(movieBookingaction.setBookingChair(chair))}}>X</td>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className='fw-bolder'>Tổng tiền</td>
                        <td className='fw-bold text-warning'> {bookingChairs.reduce((total,chair)=>(total+chair.gia),0 )} </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <button className='btn btn-success' onClick={()=>{dispatch(movieBookingaction.setBookedChairs())}}>Thanh toán</button>
        </div>
    )
}

export default Result