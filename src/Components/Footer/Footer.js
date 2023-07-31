

export const AppFooter = () => {

    return (
        <footer className={'w-full h-[40vh] bg-gray-400 relative'}>
            <section className={'relative w-[90%] md:w-[80%] h-[80%] mx-auto flex flex-row gap-2'}>
                <div className={'w-fit md:w-[10em] h-full text-start md:pl-2 pt-4 text-white capitalize font-quicksand text-xs cursor-pointer'}>
                    <h1 className={'font-quicksandBold text-white text-md capitalize'}>follow us</h1>
                    <hr />
                    <h5 className={'mt-1'}>facebook</h5>
                    <h5>instagram</h5>
                    <h5>whatsapp</h5>
                    <h5>telegram</h5>
                    <h5>twitter</h5>

                </div>

                <div className={'w-fit md:w-[10em] h-full text-start md:pl-2 pt-4 text-white capitalize font-quicksand text-xs cursor-pointer'}>
                    <h1 className={'font-quicksandBold text-white text-md capitalize'}>links</h1>
                    <hr />
                    <h5 className={'mt-1'}>male fashion</h5>
                    <h5>female fashion</h5>
                    <h5>shipping discounts</h5>
                    <h5>promo deals</h5>
                    <h5>about us</h5>

                </div>

                <div className={'w-fit md:w-[10em] h-full text-start md:pl-2 pt-4 text-white capitalize font-quicksand text-xs cursor-pointer'}>
                    <h1 className={'font-quicksandBold text-white text-md capitalize'}>products</h1>
                    <hr />
                    <h5 className={'mt-1'}>shirts</h5>
                    <h5>trousers</h5>
                    <h5>skirts</h5>
                    <h5>bags</h5>
                    <h5>shoes</h5>

                </div>

                <div className={'absolute right-0 w-fit md:w-[10em] h-full text-start pl-2 pt-4 text-white capitalize font-quicksand text-xs cursor-pointer'}>
                    <h1 className={'font-quicksandBold text-white text-md capitalize'}>contact us</h1>
                    <hr />
                    <h5 className={'mt-1'}>facebook</h5>
                    <h5>instagram</h5>
                    <h5>whatsapp</h5>
                    <h5>telegram</h5>
                    <h5>twitter</h5>

                </div>
            </section>
        </footer>
    )
}