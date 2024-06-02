import React from 'react';
import Insta from '@/app/assets/icon-instagram.svg'
import Whatsapp from '@/app/assets/icon-whatsapp.svg'

const Footer: React.FC = () => {
    return (
        <footer className='w-full border-t border-solid border-text_color h-fit flex justify-center items-center absolute bottom-0 left-0 z-100 bg-bg_color'>
            <div className='flex flex-col items-center gap-2 p-4'>
                <div className='flex items-center gap-4'>
                    <a className='block' href='#' target='_blank' rel='noopener noreferrer'>
                        <Insta width='24px' height='24px' />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a className='block' href='#' target='_blank' rel='noopener noreferrer'>
                        <Whatsapp width='24px' height='24px' />
                        <span className="sr-only">Whatsapp</span>
                    </a>
                </div>
                <p>Copyright © 2024 Lugar de masajes</p>
                <p className='text-center text-sm'>Developed by <a className='underline' href="http://agreloe.dev" target="_blank" rel="noopener noreferrer">agreloe</a></p>
            </div>
        </footer>
    )
}
export default Footer;