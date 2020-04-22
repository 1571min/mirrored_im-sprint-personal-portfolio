// @flow
import * as React from 'react';
import profile from '../assets/images/profile.png';

export const About = (props) => {
  return (
    <div className="box content about">
      <img src={profile}></img>
      <h2>About</h2>
      <p>
        안녕하세요 저는 데이터 분석과 웹 개발에 관심을 가지고 있는 개발공부를
        하고 있는 이민택입니다 현재 코드스테이츠에서 immsersive 코스를 진행
        중입니다
      </p>
      <h2>기술스택</h2>
      <p>javascrip,java,python,c,c++</p>
      <p>왼쪽에서 오른쪽은 좋아하는 정도이며, 위에서 아래는 이해 정도입니다.</p>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>💔️</th>
            <th>❤️ ️</th>
            <th>❤️❤️ ️</th>
            <th>❤️❤️❤️ ️</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>😖</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>🧐</td>
            <td>&nbsp;</td>
            <td>
              <code>C</code>{' '}
            </td>
            <td>
              <code>ECMAScript6</code>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>😏</td>
            <td>
              <code>Shell</code>
            </td>
            <td>&nbsp;</td>
            <td>
              <code>C++</code> {','}
            </td>
            <td>
              <code>javascript</code>
              {','} <code>Python</code>
              {','}
              <code>java</code>
            </td>
          </tr>
          <tr>
            <td>😎</td>
            <td>&nbsp;</td>
            <td></td>
            <td></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
