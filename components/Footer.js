export default function Footer(props) {
  return (
    <footer className="p-4 mt-8 bg-teal-400">
      <nav>
        <h1>{props.stores ? props.stores.length : 0} Locations Worldwide</h1>
        <p>&copy; 2022</p>
      </nav>
    </footer>
  )
}
