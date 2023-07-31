

export default function RightArrow({ className, fill, strokeWidth, stroke }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fill ? fill : "none"} viewBox="0 0 24 24" strokeWidth={strokeWidth ? strokeWidth : 1.5} stroke={stroke ? stroke : "rgb(0, 0, 0, 0.5)"} className={className ? className : 'w-6 h-6 mx-auto'}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      

    )
}