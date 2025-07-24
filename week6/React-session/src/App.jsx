function App() {

  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the 2nd card
        </div>
      </Card>

      <Card>
        <div>
          <h1>Card with a heading</h1>
          <p>This card contains a heading and a paragraph.</p>
        </div>
      </Card>
      <Card>
        <TextComponent />
      </Card>
    </div>
  )
}

function Card({children}) {
  return <div style={{
    border: "2px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}

function TextComponent() {
  return <div>
    This is a text component inside a card.
  </div>
}

export default App