import React from 'react'

const SportType = () => {
  return (
    <div>
        <div className='font-bold h-10 w-full text-3xl text-start mt-9 ml-22'>SELECT YOUR SPORT, AND GET IN THE GAME!</div>
        <div className=' w-full  flex items-center justify-center gap-6 mt-7'>
            <div className='h-120 w-80 '> 
                <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/running_5_0f50633095.jpg'
                className='object-cover '
                ></img>
                <a href='#'className='font-bold px-2'>RUNNING</a>
            </div>
            <div className='h-120 w-80 '>
                <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/basketball_07660f1752.jpg'
                className='object-cover '
                ></img> 
                <a href='#'className='font-bold px-2'>BASKETBALL</a>
                </div>
            <div className='h-120 w-80 '> 
                <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/golf_e302f4caf3.jpg'
                className='object-cover '
                ></img>
                <a href='#'className='font-bold px-2'>GOLF</a>
            </div>
            <div className='h-120 w-80 '> 
                <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Football_1_59a19bee73.jpg'
                className='object-cover '
                ></img>
                <a href='#'className='font-bold px-2'>FOOTBALL</a>
            </div>
        </div>
        </div>
    
  )
}

export default SportType