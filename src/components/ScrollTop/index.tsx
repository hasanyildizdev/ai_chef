
const ScrollTop = () => {
    return (
        <div className="fixed bottom-8 right-8 z-[99]">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
        </div>
    );
};

export default ScrollTop;