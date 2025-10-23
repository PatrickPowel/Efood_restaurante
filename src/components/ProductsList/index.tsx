import Food from '../../Models/Food'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'salmon' | 'black'
  food: Food[]
}

const ProductsList = ({ background, title, food }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {food.map((food) => (
          <Product
            key={food.id}
            description={food.description}
            image={food.image}
            infos={food.infos}
            system={food.system}
            title={food.title}
            nota={food.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
