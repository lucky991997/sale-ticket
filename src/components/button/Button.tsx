import React, { ComponentProps, CSSProperties, ReactNode } from 'react'
import './button.scss'

type ButtonProps = {
    variant: 'primary' | 'secondary'
    size: 'XL' | 'M' 
    children: ReactNode;
    styles?: CSSProperties;
} & ComponentProps<'button'>

const Button = ( { variant, children, size ,styles, ...rest }: ButtonProps ) => {
  return (
    <button style={styles} className={`btn-${variant} btn-${size}` } {...rest}>
      <span>{children}</span>  
    </button>
  )
}

export default Button