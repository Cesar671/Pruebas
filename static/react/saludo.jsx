const Saludo = () => {
  return (
    <div>saludo</div>
  )
}

if(document.getElementById('react_saludo')){
  ReactDOM.render(<Saludo></Saludo>, document.getElementById('react_saludo'))
}