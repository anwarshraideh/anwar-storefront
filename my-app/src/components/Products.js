import { connect } from "react-redux";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";

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

                                    <Button> ADD TO CART </Button>
                                    <Button> VIEW DETAILS </Button>

                                </CardActions>

                                {/* <CardContent>Name : {product.name}</CardContent>
                            <CardContent>Price : {product.price}$</CardContent>
                            <CardContent>inventoryCount : {product.inventoryCount}</CardContent>

                            <CardActions>
                                <Button >ADD TO CART</Button>
                                <Button >VIEW DETAILS</Button>
                            </CardActions> */}

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

export default connect(mapStateToProps)(Products);