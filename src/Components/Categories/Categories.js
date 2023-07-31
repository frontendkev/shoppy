
export const Categories = ({children}) => {


    return (
        <section aria-label={'categories section'} className={'relative w-full h-[5em]'}>
            <section id={'scroller'} className={'relative w-[90%] md:w-[80%] h-full overflow-hidden mx-auto '}>
                <div className={'w-fit md:w-full h-full flex flex-row gap-2'}>
                    {children}
                </div>
            </section>

        </section>
    )
}