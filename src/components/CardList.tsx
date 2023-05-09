import { Check } from 'lucide-react'
import React from 'react'

const CardList = ({ text }: any) => {
    return (
        <li className=''>
            <Check size={15} />
            {text}
        </li>
    )
}

export default CardList