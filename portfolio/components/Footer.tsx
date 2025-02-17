import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white py-5 w-full flex justify-around my-4">
        <div className="flex gap-2">
            <Link className="text-xs" href={'https://www.youtube.com/@4thirteenYT'}>Linkdin</Link>
            <Link className="text-xs" href={'https://github.com/himal-13'}>Github</Link>
            <Link className="text-xs" href={'https://www.linkedin.com/in/himal-bhusal-35b722228/'}>YouTube</Link>
        </div>
        <p className="text-xs text-gray-700">@himalbhusal2025</p>
    </footer>
  )
}

export default Footer
