import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;

// Container components
// function App() {
//   return (
//     <>
//       <h1>Base Create React App</h1>
//       <RegularList
//         items={people}
//         resourceName="person"
//         itemComponent={SmallPersonListItem}
//       />
//       <RegularList
//         items={people}
//         resourceName="person"
//         itemComponent={LargePersonListItem}
//       />
//       <RegularList
//         items={products}
//         resourceName="product"
//         itemComponent={SmallProductListItem}
//       />
//       <RegularList
//         items={products}
//         resourceName="product"
//         itemComponent={LargeProductListItem}
//       />
//     </>
//   );
// }
