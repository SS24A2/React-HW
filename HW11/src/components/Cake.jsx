import { useDispatch, useSelector } from 'react-redux'
import { buyCake, restockCakes } from './../actions/CakeActions'
import { useState } from 'react'

export const Cake = () => {
    const dispatch = useDispatch()
    const cakes = useSelector((state) => state.CakeReducer.cakes)
    // const message = useSelector((state) => state.CakeReducer.message)

    const [cakesNum, setCakesNum] = useState('')
    const [cakesRestockNum, setCakesRestockNum] = useState('')

    return (
        <div id="cake">
            <h2>Cakes: {cakes} </h2>
            {/* {message && <h3>{message}</h3>} */}

            <div>
                <input
                    style={{ width: 220, margin: '20px 10px 0px' }}
                    type={'number'}
                    min={1}
                    max={cakes}
                    placeholder="Enter number of cakes to buy"
                    value={cakesNum}
                    onChange={(e) => {
                        setCakesNum(e.target.value)
                    }}
                />
                <button
                    disabled={cakesNum < 1 || cakesNum > cakes}
                    onClick={() => {
                        dispatch(buyCake(cakesNum))
                        setCakesNum('')
                    }}
                >
                    Buy
                </button>
                <p
                    style={{
                        margin: '0px 10px 20px 12px',
                        fontSize: 14,
                        color: 'blue',
                    }}
                >{`min 1, max ${cakes} cakes`}</p>
            </div>
            <div>
                <input
                    style={{ width: 220, margin: '20px 10px 0px' }}
                    type={'number'}
                    min={1}
                    placeholder="Enter number of cakes to restock"
                    value={cakesRestockNum}
                    onChange={(e) => {
                        setCakesRestockNum(e.target.value)
                    }}
                />
                <button
                    disabled={cakesRestockNum < 1}
                    onClick={() => {
                        dispatch(restockCakes(cakesRestockNum))
                        setCakesRestockNum('')
                    }}
                >
                    Restock
                </button>
                <p
                    style={{
                        margin: '0px 10px 20px 12px',
                        fontSize: 14,
                        color: 'blue',
                    }}
                >{`min 1 cake`}</p>
            </div>
        </div>
    )
}
