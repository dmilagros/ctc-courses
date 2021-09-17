import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import getAllCourses from '../../services/coursesService';
import Card from '../../components/Card';
import Input from '../../components/Input';

import './home.scss';

const Home = () => {
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('PEN');
  const [newData, setNewData] = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const getCourses = async () => {
    setLoading(true);
    const res = await getAllCourses();
    const dataFilter = res.data.filter((course) => parseInt(currency === 'PEN' ? course.amount_pen : course.amount_usd, 10) !== 0);
    setNewData(dataFilter);
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
  }, [currency]);

  if (loading) return <p>Cargando...</p>;
  return (
    <div className="container-home">
      <section className="section-filter">
        <Input
          type="text"
          placeholder="Buscar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </section>
      <section className="section-buttons">
        <p>Seleccione su moneda:</p>
        <button type="button" className={currency === 'USD' ? 'linkSelected' : 'link'} onClick={() => setCurrency('USD')}>USD</button>
        <div className="border" />
        <button type="button" className={currency === 'PEN' ? 'linkSelected' : 'link'} onClick={() => setCurrency('PEN')}>PEN</button>
      </section>
      <section className="section-courses">
        {newData.length > 0 ? (
          newData
            .filter((item) => item.name.toLowerCase().includes(value))
            .map((filteredName) => <Card data={filteredName} currency={currency} />)
        ) : (
          <p>No existen registros</p>
        )}
      </section>
    </div>
  );
};

export default Home;
