import styled, {css} from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
`

const CheckoutTableTitleStyles = css`
    width: 23%;
`

export const CheckoutTableTitleName = styled.span`${CheckoutTableTitleStyles}`
export const CheckoutTableTitleQuantity = styled.span`
    ${CheckoutTableTitleStyles}
    display: flex;
    flex-direction: row;
`
export const CheckoutTableTitlePrice = styled.span`${CheckoutTableTitleStyles}`

export const CheckoutTableQuantityArrow = styled.div`
    cursor: pointer;
`
export const CheckoutTableQuantityValue = styled.div`
    margin: 0 10px;
`
export const CheckoutTableRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`