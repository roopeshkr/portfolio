const Footer=()=>{
    return(
        <>
        <div className="py-5 bg-gray-200 flex justify-between px-72">
            <div>
                <p>@2023 Roopesh Rokade <span>All Rights Reseved</span></p>
            </div>
            <div className="space-x-5">
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <a href="/licencing" className="hover:underline">Licencing</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
        </div>
        </>
    );
}

export default Footer;