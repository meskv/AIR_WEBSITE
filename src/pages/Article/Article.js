import React from 'react';
import { CreateCopyBlock, CreateCodeBlock } from './Component/CreateElements.js';

const snippet = `my_dict1 = {'a' : 1, 'b' : 2, 'c' : 3}
my_dict2 = {'d' : 4, 'e' : 5, 'f' : 6}
  
# Method 1
result = { **my_dict1, **my_dict2}
print(result)
  
# Method 2
result = my_dict1.copy()
result.update(my_dict2)
print(result)
  
# Method 3
result = {key: value for d in (my_dict1, my_dict2) for key, value in d.items()}`;


export default function Single() {
    return (<>
        <article>
            <h1 className="title"><a href="#the-cosmos">This is the title of the article</a></h1>
            <h2>else something else here</h2>

            <time dateTime="03-09-2014">MARCH 9, 2014</time>    <p>Lorem ipsum dolor sit amet. <a href="https://en.wikipedia.org/wiki/carl_sagan">this is a link</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur laudantium exercitationem voluptatem molestias eaque tempore tenetur inventore, vel iure autem repellendus est consequatur debitis libero nobis et beatae iusto perspiciatis.    </p>

            <figure className="size-2">
                <img src="http://localhost:3000/images/Home/bg1.jpg" alt='about something' />
                <p className="caption">
                    This is related to nothing
                </p>
            </figure>

            <h3>COSMOS IS ALSO A STORY ABOUT US</h3>    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate consequuntur unde adipisci explicabo. Quasi placeat cupiditate provident, velit quam consequuntur ex repellendus aspernatur quia nemo officia temporibus enim, et voluptas. <strong>Accept these terms, and the cosmos is yours.</strong>    </p>

            <blockquote>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci debitis fugiat dolorem! </p>

            </blockquote>

            <div className="divided">
                <div className="text">
                    <h3 className="subtitle">This is a subtitle Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Scrimba is a platform for interactive coding screencast where
                        you can run the code at any moment in time.</p>
                </div>
                <figure className="size-1">
                    <img src="http://localhost:3000/images/Home/bg1.jpg" alt='about something' />
                    <p className="caption">
                        This is related to nothing
                    </p>
                </figure>
            </div>

            <CreateCodeBlock className="code" code={snippet} language={"python"} showLineNumbers={true} startingLineNumber={1} />

            <CreateCopyBlock className="code" code={snippet} language={"python"} showLineNumbers={true} startingLineNumber={15} />



        </article>
    </>
    )
}
