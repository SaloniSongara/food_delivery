import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/FoodType.css";
import vegImg from "../assets/images/vegFood.jpg";
import nonvegImg from "../assets/images/nonvegFood.jpg";
import chineseImg from "../assets/images/chineseFood.jpg";

function FoodTypeSelector() {
    return (
        <>
            <div className='mainContainer'>
                <Card className='card'>
                    <Card.Img className='foodType' variant="top" src={vegImg} />
                    <Card.Body>
                        <Card.Title>Veg Food..</Card.Title>
                        <Card.Text>
                            "we offer a delicious selection of vegetarian dishes here!"
                        </Card.Text>
                        <Button variant="primary"><a href='/category/veg' className='text-white'>See more</a></Button>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img className='foodType' variant="top" src={nonvegImg} />
                    <Card.Body>
                        <Card.Title>Non-Veg food..</Card.Title>
                        <Card.Text>
                            "we serve delicious non-veg dishes here"
                        </Card.Text>
                        <Button variant="primary"><a href='/category/non-veg' className='text-white'>See more</a></Button>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img className='foodType' variant="top" src={chineseImg} />
                    <Card.Body>
                        <Card.Title>Chinese food..</Card.Title>
                        <Card.Text>
                            "Yes, authentic Chinese food is available here!"
                        </Card.Text>
                        <Button variant="primary"><a href='/category/chinese' className='text-white'>See more</a></Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default FoodTypeSelector;