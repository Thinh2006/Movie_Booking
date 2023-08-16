import React from 'react'
import './style.scss'
import cn from 'classnames'
import { movieBookingaction } from '../store/Moviebooking/slice'
import {useDispatch, useSelector} from 'react-redux'


const Chair = ({ghe,className}) => {
    const dispatch = useDispatch()

    const {bookingChairs, bookedChairs} = useSelector((state)=>state.movieBooking)
    return (
      <div className={cn('Chair mt-3', className, {
        booking: bookingChairs.find((chair)=>chair.soGhe === ghe.soGhe),
        booked: bookedChairs.find((chair)=>chair.soGhe === ghe.soGhe)})} onClick={()=>{dispatch(movieBookingaction.setBookingChair(ghe))}}>{ghe.soGhe}</div>
    )
}

export default Chair