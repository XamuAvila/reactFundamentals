const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Rendering this</h1>;
    } else {
      return <h1>Also rendering this</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("CLicou")}>
          Clique aqui tambem
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
