

export default function Line({className}) {
    return (
        <>
            <section aria-label="related products section" className={`${className ? className : 'relative portrait:h-[2em] w-full h-[3em]'}`}>
                        <hr style={{ borderTop: "0.2px solid gray", borderRadius: "10px", opacity: '0.2', position: "relative" }} />
            </section>
        </>
    )
}