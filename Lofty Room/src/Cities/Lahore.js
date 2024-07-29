import React from "react";
import NavBar from "../nav-bar/NavBar";
import "./Lahore.css";
const Lahore=()=>{
    return(
        <>
<NavBar/>
{/* <!-- jumbotron and nav --> */}


	<section class="search-container">
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<div class="row my-3">
						<div class="col-sm-12 map-container-btn text-center">
							<input name="map" id="" class="btn btn-outline-secondary map-btn" type="button" value="map"/>
						</div>
					</div>
					<div class="row mt-2 justify-content-between">
						<div class="filter-card">
							<h5>Filter</h5>
							<form action="#">
								<div class="row form-group">
									<div class="col-md-12">
										<label for="mintopay">Check in</label>
										<p>
											<input type="date" name="checkin" id="checkin" class="form-control"/>
										</p>
									</div>
									<div class="col-md-12">
										<label for="maxtopay">Check out</label>
										<p>
											<input type="date" name="checkout" id="checkout" class="form-control"/>
										</p>
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<label for="date-start">Price Range</label>: £
										<span id="price" class="price">1000</span>
										<input type="range" min="23" max="1000" value="1000" class="slider" id="myRange"/>
										{/* </p> */}
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<input type="submit" class="btn btn-primary btn-block" value="Limit"/>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>



				<div class="col-lg-9  px-4">
					<div class="row mt-3">
						<div class="col-md-6 align-self-center">
							<p class="m-0">
								<b>123</b> out of 1987</p>
						</div>
						<div class="col-md-6">
							<div class="form-inline">
								<label class="m-4" for="exampleFormControlSelect1">Sort by</label>
								<select class="form-control" id="exampleFormControlSelect1">
									<option>Recommended</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>

						</div>
					</div>

					<div class="row search-card-result">
						<div class="col-md-3">
							<img class="img-fluid" src="http://placeimg.com/640/640/arch" alt="Card image cap"/>
						</div>
						<div class="col-md-5">
							<h5>Choose The Best Plan For You</h5>
							<div class="review">

								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<p>Join over 1 Million of users. Dignissimos asperiores vitae velit veniam</p>
							<p>
								<span class="badge badge-primary">8.5</span> Excellent (2323 reviews)</p>
							<p>
								<i class="fa fa-bath"></i>
								<i class="fa fa-phone"></i>
								<i class="fa fa-wifi"></i>
								<i class="fa fa-tv"></i>
							</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<p>place.com</p>
							<p>
								<s>£123</s>
							</p>
							<p>Place.com</p>
							<p>£65</p>
							<p class="border-top additional">More Deals from £65</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<h4>
								<span class="badge badge-success">Top Deal</span>
							</h4>
							<div class="text-warning">
								<p>place.com</p>
								<p>
									<s>£123</s>
								</p>

							</div>
							<div class="text-success">
								<p>Place.com</p>
								<h5>£65</h5>
							</div>

							<div class="btn btn-success">View deal </div>
						</div>
					</div>
					<div class="row search-card-result">
						<div class="col-md-3">
							<img class="img-fluid" src="http://placeimg.com/640/640/arch" alt="Card image cap"/>
						</div>
						<div class="col-md-5">
							<h5>Choose The Best Plan For You</h5>
							<div class="review">

								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<p>Join over 1 Million of users. Dignissimos asperiores vitae velit veniam</p>
							<p>
								<span class="badge badge-primary">8.5</span> Excellent (2323 reviews)</p>
							<p>
								<i class="fa fa-bath"></i>
								<i class="fa fa-phone"></i>
								<i class="fa fa-wifi"></i>
								<i class="fa fa-tv"></i>
							</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<p>place.com</p>
							<p>
								<s>£123</s>
							</p>
							<p>Place.com</p>
							<p>£65</p>
							<p class="border-top additional">More Deals from £65</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<h4>
								<span class="badge badge-success">Top Deal</span>
							</h4>
							<div class="text-warning">
								<p>place.com</p>
								<p>
									<s>£123</s>
								</p>

							</div>
							<div class="text-success">
								<p>Place.com</p>
								<h5>£65</h5>
							</div>

							<div class="btn btn-success">View deal </div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

	<section class="py-4">
		<div class="container">
			<div class="row justify-content-center">
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
								<span class="sr-only">Previous</span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
								<span class="sr-only">Next</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>

	{/* <!-- Subscribe Panel --> */}
	<section id="subscribe-panel">
		<div class="container">
			<div class="row">
				<div class="col-md-8 offset-md-2 text-center">
					<h2>Subscribe</h2>
					<p>To be sent our latest deals.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<form class="form-inline justify-content-center">
						<div class="form-group mb-2 col-md-6 col-sm-6">
							<label for="email" class="sr-only">Email</label>
							<input type="email" class="form-control" id="email" placeholder="Your Email"/>
						</div>
						<button type="submit" class="btn btn-primary mb-2">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	</section>

 
       
        </>
    )
}
export default Lahore;