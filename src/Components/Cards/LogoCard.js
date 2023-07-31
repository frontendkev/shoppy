

export default function LogoCard({ logo }) {
    return (
        <figure className="relative w-[10em] h-full">
            <img className="relative w-full h-full object-contain lg:object-contain" alt="" src={logo} />
        </figure>
    )
}