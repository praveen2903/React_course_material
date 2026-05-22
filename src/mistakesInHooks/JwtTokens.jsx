import React from 'react'
import jwtImg from "../assets/jwt.jpeg";
import redisImg from "../assets/jwt_token_redis.jpeg";
import useEffectImg from "../assets/useEffect_working.jpeg";
import executionImg from "../assets/execution_order.jpeg";


function ImageBanner() {
  const images = [
    jwtImg,
    redisImg,
    useEffectImg,
    executionImg,
  ];

  return (
    <div>

      <div>
        {images.map((img, index) => (
          <div
            key={index}
          >
            <img
              src={img}
              alt="graphql"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

const JwtTokens = () => {
  return (
    <div>JwtTokens & RefreshTokens & Redis Cache
        <p>
            server creates a jwtToken by signing our key to the some random token and sends to the frontend after login
        </p>
        <p>
            When user post login sends any api then this bearer token to backend where it verifies it with our secret key
        </p>
        <ImageBanner/>
    </div>
  )
}

export default JwtTokens