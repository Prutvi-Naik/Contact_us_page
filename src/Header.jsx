const Header = () => {
    return(
        <div className="flex items-center justify-between">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/10439/10439810.png" alt="logo" />
          </div>
          <div>
            <ul className="flex gap-4 text-2xl font-[600]">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </div>
        </div>
    )
}

export default Header