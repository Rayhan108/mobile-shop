/* eslint-disable react/prop-types */


const SectionTitle = ({header}) => {
    return (
        <div className="text-center md:w-5/6 py-10 mx-auto my-8 ">
            
            <h3 className="uppercase border-y-4 py-5 text-5xl">{header}</h3>
        </div>
    );
};

export default SectionTitle;