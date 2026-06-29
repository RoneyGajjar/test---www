const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={`w-full mx-auto max-w-[var(--container-width)] p-2 md:p-0 ${className}`}>
            {/* <div className="w-full max-w-[var(--container-width)] text-center flex flex-col items-center mb-14"> */}
            {children}
            {/* </div> */}
        </section>
    )
}

export default Section;