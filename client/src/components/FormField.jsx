import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriceMe, handleSurpriceMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>

        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>

        {isSurpriceMe && (
          <button type='button' onClick={handleSurpriceMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
              Surpirce me
          </button>
        )}
      </div>

      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className='bg-gray-50 border border-grray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649FF] focus:border-[#4649FF] outline-none block w-full p-3' />
          
    </div>
  )
}

export default FormField