import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ChineseItems, { NonVegItems, VegItems } from '../configs/general';

function FoodCard({item}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="primary">Order now</Button>
            </Card.Body>
        </Card>
    );
}

function Category() {
    let {slug} = useParams();

    const allItems = () =>{
        if(slug === 'veg') return VegItems;
        else if(slug === 'non-veg') return NonVegItems;
        else if (slug === 'chinese') return ChineseItems;
        return [];
    }

    const items = allItems();

  return (
    <>
          <div className='d-flex flex-wrap gap-2 justify-content-center mt-4'>
              {items.map((item)=>{
                return <FoodCard item={item} key={item.id}/>
              })}
          </div>
    </>
  )
}

export default Category