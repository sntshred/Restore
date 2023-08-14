dotnet ef migrations add InitialMigration -o Data/Migrations
dotnet ef database update
dotnet ef database drop
dotnet watch --no-hot-reload

## React

npx create-react-app client --template typescript --use-npm

<br/>
 Inline Styling
       <h1 style={{color:'green'}}>Re-Store</h1>

<br/>
So we've got the expression with an argument of item and we've got an arrow function.
And because I've opened parentheses, I am implicitly returning from this function.
if I'm just using or if I'm just returning one thing, then typically I'll just use
parentheses and then whatever I do now is going to be returned from this function that I've created.

```
function App() {
  return (
    <div className="app">
      <h1 style={{color:'green'}}>Re-Store</h1>
      <ul>
        {products.map(item => (
          <li>{item.name}- {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

```

What we can also do is use curly brackets.
But if I use this method, then I do need to specify that I'm going to be returning something.

```
  <div className="app">
      <h1 style={{color:'green'}}>Re-Store</h1>
      <ul>
        {products.map(item => {
        return <li>{item.name}- {item.price}</li>
        })}
      </ul>
    </div>
```

<br/>
## React hooks
which allow us to hook into the React component states and lifecycle events without actually needing to create a class component.

UseState
what the goal of this is, is that we want to store this list of products inside our function and
make use of those products inside the function as well.

#UseEffect:
Allows us to do something when our component loads






Credit:
https://www.udemy.com/course/learn-to-build-an-e-commerce-store-with-dotnet-react-redux 