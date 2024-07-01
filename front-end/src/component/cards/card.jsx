import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';




export const data =[
    {
        id:0,
        name:'Məhəmməd',
        age:22

},
{
    id:1,
    name:'Tunar',
    age:20

} ,   
{
    id:2,
    name:'Aydan',
    age:22

}
]
const GridCard = () => {

    const navigate = useNavigate();
  return(
    <>
    <Row gutter={16}>
        {
        data.map((dr,index)=>(
        
            <Col key={index} span={8} style={{cursor:'pointer'}}>
                <Card onClick={()=> navigate(`/detail/${dr.id}`)} title={dr.name} bordered={false}>
                    <p> Name: {dr.name}</p>
                    Age: {dr.age}
                </Card>
            </Col>
        ))
        }

   
    </Row>
  </>
  )

};
export default GridCard;