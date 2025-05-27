'use client '

export default function AppWelcome() {
    const title = 'Welcome to cosci';
    const currentYear = <p>2025</p>;
    const isShow = false;
    const handleClick = () => {
        alert('Hello TypeScript');
    }
    return (
        <>
            <p>{title.toUpperCase()}</p>
            <button className="bg-blue-700 p-3 m-3 text-white rounded-lg"  onClick={handleClick}>กดได้เลย!</button>
            {currentYear}
            {
                isShow && <p>/Date:10/10/1998</p>
            }
            {
                isShow ? <p>Hello Next.ls</p> : <p>Hello JavaScript</p>
            }
        </>
    );
}