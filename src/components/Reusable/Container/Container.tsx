import { ReactNode } from "react";

const Container =({children} : {children:ReactNode}) => {
    return (
        <div className="max-w-[1300px] 2xl:max-w-[1450px] w-full mx-auto px-4 2xl:px-0">
            {children}
        </div>
    );
};

export default Container;