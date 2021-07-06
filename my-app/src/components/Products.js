import { connect } from "react-redux";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import { addToCart } from "../store/ProductsStore";

const Products = props => {

    return (

        <>
            <section>
                {props.productReducer.productsList.map((p, idx) => {


                    return (

                        <>
                            <Card key={idx} style={{ width: "300" }}  >

                                <CardContent>{p.name}</CardContent>
                                <CardContent>{p.inventoryCount}</CardContent>
                                <CardContent>{p.price}</CardContent>


                                <CardActions>

                                    <Button onClick={() => props.addToCart(p)}> ADD TO CART </Button>
                                    <Button> VIEW DETAILS </Button>

                                </CardActions>

                                

                            </Card>
                        </>
                    );

                })}

            </section>

        </>
    );
};


const mapStateToProps = (state) => ({
    categoryReducer: state.categoryReducer,
    productReducer: state.productReducer,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps ,mapDispatchToProps )(Products);