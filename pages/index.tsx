import type { NextPage } from 'next'
import { Button } from '../src/components/Box'

const Home: NextPage = () => {
    return (
        <div>
            <Button type='primary' label='Hello' />
        </div>
    )
}

export default Home
