export default function Regex() {
  const pageStyle = {
    minHeight: "100vh",
    padding: "30px",
    background: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
    textAlign: 'left'
  };

  const sectionStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    color: "#1976d2",
    marginBottom: "15px",
  };

  const codeStyle = {
    background: "#272822",
    color: "#fff",
    padding: "12px",
    borderRadius: "6px",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  };

  const thtd = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center", color: "#1565c0" }}>
        Regular Expressions (Regex) Guide
      </h1>

      {/* What is Regex */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 What is Regex?</h2>

        <p>
          Regex (Regular Expression) is a pattern used to search, validate,
          extract, and replace text.
        </p>

        <pre style={codeStyle}>
{`const regex = /hello/;`}
        </pre>

        <p>
          The above regex finds the word <b>hello</b> anywhere in a string.
        </p>
      </section>

      {/* Regex Structure */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Regex Structure</h2>

        <pre style={codeStyle}>
{`/pattern/flags`}
        </pre>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtd}>Part</th>
              <th style={thtd}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtd}>/ /</td>
              <td style={thtd}>Regex delimiters</td>
            </tr>
            <tr>
              <td style={thtd}>pattern</td>
              <td style={thtd}>Text matching rule</td>
            </tr>
            <tr>
              <td style={thtd}>flags</td>
              <td style={thtd}>Extra behavior (g, i, m)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Common Characters */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Common Regex Characters</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtd}>Regex</th>
              <th style={thtd}>Meaning</th>
              <th style={thtd}>Example Match</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtd}>\\d</td>
              <td style={thtd}>Digit (0-9)</td>
              <td style={thtd}>5, 9</td>
            </tr>
            <tr>
              <td style={thtd}>\\D</td>
              <td style={thtd}>Not a digit</td>
              <td style={thtd}>A, @</td>
            </tr>
            <tr>
              <td style={thtd}>\\w</td>
              <td style={thtd}>Word character</td>
              <td style={thtd}>a-z, A-Z, 0-9, _</td>
            </tr>
            <tr>
              <td style={thtd}>\\W</td>
              <td style={thtd}>Non-word character</td>
              <td style={thtd}>@, #</td>
            </tr>
            <tr>
              <td style={thtd}>\\s</td>
              <td style={thtd}>Space</td>
              <td style={thtd}>Space, Tab</td>
            </tr>
            <tr>
              <td style={thtd}>\\S</td>
              <td style={thtd}>Not space</td>
              <td style={thtd}>A, 5</td>
            </tr>
            <tr>
              <td style={thtd}>.</td>
              <td style={thtd}>Any Character</td>
              <td style={thtd}>a, 5, @</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Character Sets */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Character Sets []</h2>

        <pre style={codeStyle}>
{`/[abc]/   => a OR b OR c
/[a-z]/   => lowercase letters
/[A-Z]/   => uppercase letters
/[0-9]/   => digits
/[A-Za-z]/ => all alphabets`}
        </pre>

        <p>
          Square brackets define a set of allowed characters.
        </p>
      </section>

      {/* Negation */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Negation [^ ]</h2>

        <pre style={codeStyle}>
{`/[^0-9]/`}
        </pre>

        <p>
          Matches anything except numbers.
        </p>

        <pre style={codeStyle}>
{`"abc123".match(/[^0-9]/g)
// ["a","b","c"]`}
        </pre>
      </section>

      {/* Quantifiers */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Quantifiers</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtd}>Regex</th>
              <th style={thtd}>Meaning</th>
              <th style={thtd}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtd}>*</td>
              <td style={thtd}>0 or more</td>
              <td style={thtd}>ab*</td>
            </tr>
            <tr>
              <td style={thtd}>+</td>
              <td style={thtd}>1 or more</td>
              <td style={thtd}>ab+</td>
            </tr>
            <tr>
              <td style={thtd}>?</td>
              <td style={thtd}>Optional</td>
              <td style={thtd}>colou?r</td>
            </tr>
            <tr>
              <td style={thtd}>{"{n}"}</td>
              <td style={thtd}>Exactly n times</td>
              <td style={thtd}>\\d{"{4}"}</td>
            </tr>
            <tr>
              <td style={thtd}>{"{n,m}"}</td>
              <td style={thtd}>Range</td>
              <td style={thtd}>\\d{"{2,5}"}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Grouping */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Grouping ()</h2>

        <pre style={codeStyle}>
{`/(ab)+/`}
        </pre>

        <p>
          Grouping treats multiple characters as one unit.
        </p>

        <pre style={codeStyle}>
{`ab      ✅
abab    ✅
ababab  ✅`}
        </pre>
      </section>

      {/* OR */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 OR Operator |</h2>

        <pre style={codeStyle}>
{`/cat|dog/`}
        </pre>

        <p>
          Matches either cat or dog.
        </p>
      </section>

      {/* Anchors */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Anchors ^ and $</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtd}>Regex</th>
              <th style={thtd}>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtd}>^</td>
              <td style={thtd}>Start of string</td>
            </tr>
            <tr>
              <td style={thtd}>$</td>
              <td style={thtd}>End of string</td>
            </tr>
          </tbody>
        </table>

        <pre style={codeStyle}>
{`/^hello/

hello world ✅
say hello ❌`}
        </pre>

        <pre style={codeStyle}>
{`/hello$/

say hello ✅
hello world ❌`}
        </pre>

        <pre style={codeStyle}>
{`/^hello$/

hello ✅
hello world ❌
say hello ❌`}
        </pre>
      </section>

      {/* Escaping */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Escaping Special Characters</h2>

        <pre style={codeStyle}>
{`/\\./`}
        </pre>

        <p>
          Matches an actual dot "." instead of any character.
        </p>

        <pre style={codeStyle}>
{`www.google.com

text.match(/\\./g)

// [".","."]`}
        </pre>
      </section>

      {/* Real Examples */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 Real World Examples</h2>

        <h3>10 Digit Mobile</h3>

        <pre style={codeStyle}>
{`/^\\d{10}$/`}
        </pre>

        <p>9876543210 ✅</p>

        <hr />

        <h3>Email</h3>

        <pre style={codeStyle}>
{`/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/`}
        </pre>

        <p>john@gmail.com ✅</p>

        <hr />

        <h3>Username</h3>

        <pre style={codeStyle}>
{`/^[A-Za-z0-9_]{3,15}$/`}
        </pre>

        <p>john_123 ✅</p>

        <h3>Gmail/ yahoo start with a letter and alpha numeric later</h3>
        <pre style={codeStyle}>
            {`/^[a-zA-z]{1}[A-za-z0-9]+@(gmail|yahoo).(com|in)$/`}
        </pre>
        <p>praveen123@gmail.com ✅</p>
        <div>
            <h3>1. Validate Username</h3>

    <p>
      Requirements:
    </p>

    <ul>
      <li>Letters allowed</li>
      <li>Numbers allowed</li>
      <li>Underscore allowed</li>
      <li>3-15 characters</li>
    </ul>

    <pre style={codeStyle}>
{`/^[A-Za-z0-9_]{3,15}$/`}
    </pre>

    <pre style={codeStyle}>
{`john_123   ✅
ab         ❌
john@123   ❌`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>2. Validate Mobile Number</h3>

    <pre style={codeStyle}>
{`/^\\d{10}$/`}
    </pre>

    <pre style={codeStyle}>
{`9876543210 ✅
98765      ❌
98765abc   ❌`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>3. Validate PIN Code</h3>

    <pre style={codeStyle}>
{`/^\\d{6}$/`}
    </pre>

    <pre style={codeStyle}>
{`500001 ✅
50001  ❌`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>4. Validate Email</h3>

    <pre style={codeStyle}>
{`/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/`}
    </pre>

    <pre style={codeStyle}>
{`john@gmail.com ✅
john@ ❌`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>5. Strong Password Validation</h3>

    <pre style={codeStyle}>
{`/^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%]).{8,}$/`}
    </pre>

    <pre style={codeStyle}>
{`Password@1 ✅
password@1 ❌
PASSWORD@1 ❌`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>6. Extract All Numbers</h3>

    <pre style={codeStyle}>
{`const str = "Age 25 Salary 50000";

str.match(/\\d+/g);

// ["25", "50000"]`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>7. Extract Hashtags</h3>

    <pre style={codeStyle}>
{`/#\\w+/g`}
    </pre>

    <pre style={codeStyle}>
{`#react
#javascript
#nodejs`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>8. Extract Mentions</h3>

    <pre style={codeStyle}>
{`/@\\w+/g`}
    </pre>

    <pre style={codeStyle}>
{`@john
@admin
@developer`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>9. Extract URLs</h3>

    <pre style={codeStyle}>
{`/https?:\\/\\/[^\\s]+/g`}
    </pre>

    <pre style={codeStyle}>
{`https://google.com
http://github.com`}
    </pre>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3>10. Remove Multiple Spaces</h3>

    <pre style={codeStyle}>
{`str.replace(/\\s+/g, " ")`}
    </pre>

    <pre style={codeStyle}>
{`"Hello     World"

Output:
"Hello World"`}
    </pre>
  </div>
      </section>

      {/* How To Build */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>📌 How To Write Regex</h2>

        <p>
          Requirement:
        </p>

        <ul>
          <li>Letters allowed</li>
          <li>Numbers allowed</li>
          <li>Underscore allowed</li>
          <li>Length 3 to 15</li>
        </ul>

        <pre style={codeStyle}>
{`Step 1

[A-Za-z0-9_]

Step 2

[A-Za-z0-9_]{3,15}

Step 3

/^[A-Za-z0-9_]{3,15}$/`}
        </pre>

        <p>
          This is the typical process used by developers to build regex.
        </p>
      </section>
      <section style={sectionStyle}>
  <h2 style={headingStyle}>🎯 Regex Interview Questions</h2>

  <table style={tableStyle}>
    <thead>
      <tr>
        <th style={thtd}>Question</th>
        <th style={thtd}>Answer</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={thtd}>Difference between * and + ?</td>
        <td style={thtd}>
          * = Zero or More <br />
          + = One or More
        </td>
      </tr>

      <tr>
        <td style={thtd}>Difference between [] and () ?</td>
        <td style={thtd}>
          [] = Character Set <br />
          () = Grouping
        </td>
      </tr>

      <tr>
        <td style={thtd}>Why use ^ and $ ?</td>
        <td style={thtd}>
          Used for complete string validation.
        </td>
      </tr>

      <tr>
        <td style={thtd}>Difference between \d and [0-9] ?</td>
        <td style={thtd}>
          Almost same. Both match digits.
        </td>
      </tr>

      <tr>
        <td style={thtd}>Difference between \w and [A-Za-z0-9] ?</td>
        <td style={thtd}>
          \w includes underscore (_).
        </td>
      </tr>

      <tr>
        <td style={thtd}>What is a Capturing Group?</td>
        <td style={thtd}>
          Parentheses () store matched values for reuse.
        </td>
      </tr>

      <tr>
        <td style={thtd}>What is Greedy Matching?</td>
        <td style={thtd}>
          Matches the longest possible string.
        </td>
      </tr>

      <tr>
        <td style={thtd}>What is Lazy Matching?</td>
        <td style={thtd}>
          Matches the shortest possible string.
        </td>
      </tr>

      <tr>
  <td style={thtd}>What is Lookahead?</td>

  <td style={thtd}>
    <p>
      Lookahead is a <b>zero-width assertion</b>. It checks whether a
      condition exists ahead without including it in the final match.
    </p>

    <h4>Positive Lookahead (?=)</h4>

    <pre style={codeStyle}>
{`\\d+(?=kg)`}
    </pre>

    <p>
      Match digits only if followed by <b>kg</b>.
    </p>

    <pre style={codeStyle}>
{`100kg  ✅ Matches 100
100lbs ❌ No Match`}
    </pre>

    <h4>Negative Lookahead (?! )</h4>

    <pre style={codeStyle}>
{`Java(?!Script)`}
    </pre>

    <p>
      Match <b>Java</b> but not <b>JavaScript</b>.
    </p>

    <pre style={codeStyle}>
{`Java ✅
JavaScript ❌`}
    </pre>

    <h4>Interview Password Example</h4>

    <pre style={codeStyle}>
{`/^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$/`}
    </pre>

    <ul>
      <li>(?=.*[A-Z]) → At least one uppercase</li>
      <li>(?=.*[a-z]) → At least one lowercase</li>
      <li>(?=.*\\d) → At least one digit</li>
      <li>.{`{8,}`} → Minimum 8 characters</li>
    </ul>

    <pre style={codeStyle}>
{`Password1 ✅
password1 ❌
PASSWORD1 ❌
Password ❌`}
    </pre>

    <h4>Common Interview Question</h4>

    <p>
      Why use Lookahead instead of normal matching?
    </p>

    <p>
      Because it allows multiple validations to be checked without
      consuming characters, making password and complex string
      validations easier.
    </p>
  </td>
</tr>

      <tr>
        <td style={thtd}>What does \b mean?</td>
        <td style={thtd}>
          Word Boundary.
        </td>
      </tr>

      <tr>
        <td style={thtd}>What does g flag do?</td>
        <td style={thtd}>
          Finds all matches.
        </td>
      </tr>

      <tr>
        <td style={thtd}>What does i flag do?</td>
        <td style={thtd}>
          Case-insensitive matching.
        </td>
      </tr>

      <tr>
        <td style={thtd}>What does m flag do?</td>
        <td style={thtd}>
          Multi-line matching.
        </td>
      </tr>
    </tbody>
  </table>
</section>
    </div>
  );
}