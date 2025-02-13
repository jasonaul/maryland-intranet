import React from 'react';
import AccordionItem from './AccordionItem';
import './HR.css';

function HR() {
  return (
    <div className="hr">
      <div className="handbook-banner">
        <h2>Maryland LCV Employee Handbook</h2>
        <p>
          Welcome to the Maryland LCV &amp; Maryland LCV Education Fund team! This handbook outlines our mission, policies, and benefits.
          Please review each section carefully to familiarize yourself with our guidelines.
        </p>
        <a 
          href="https://drive.google.com/file/d/1_YNMr1dSO_HYZZwesci76KTjw164VoYw/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="handbook-button"
        >
          View Full Employee Handbook ↗
        </a>
      </div>

      <div className="accordion-container">
        <AccordionItem title="Introduction">
          <div className="accordion-content">
            <p>
              <strong>Welcome!</strong> You are joining Maryland LCV &amp; Maryland LCV Education Fund, organizations dedicated to protecting the environment through citizen participation and political action.
            </p>
            <p>
              This manual serves as a guideline outlining the personnel policies and procedures that apply to all employees. It is not a contract of employment.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Employment Principles">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Equal Employment Opportunity:</strong> Maryland LCV &amp; Maryland LCV Education Fund are committed to providing a workplace free from discrimination.
              </li>
              <li>
                <strong>Anti-Harassment Policy:</strong> We prohibit all forms of harassment—verbal, physical, or visual—to ensure a respectful environment.
              </li>
              <li>
                <strong>Drug-Free Workplace:</strong> A safe, drug-free environment is maintained at all times.
              </li>
              <li>
                <strong>Confidentiality:</strong> All proprietary and confidential information must be protected.
              </li>
              <li>
                <strong>Conflict of Interest:</strong> Employees must disclose any potential conflicts to avoid compromising work decisions.
              </li>
              <li>
                <strong>Individuals with Disabilities:</strong> In compliance with ADA and other laws, we provide equal access and reasonable accommodations.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Hiring">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Introductory Period:</strong> All new employees work on an introductory basis for the first 90 days.
              </li>
              <li>
                <strong>Personal Relationships:</strong> Employees in direct or indirect supervisory chains must avoid conflicts arising from personal relationships.
              </li>
              <li>
                <strong>Classification of Employees:</strong> Our workforce includes regular, short-term, temporary employees, and independent contractors. Positions are designated as full-time or part-time.
              </li>
              <li>
                <strong>Internships:</strong> Both paid and unpaid internships are available with specific guidelines regarding benefits and duration.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Employment &amp; Work Policies">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Reporting to Work:</strong> Standard work hours are Monday through Friday from 9:00 AM to 6:00 PM (with a one-hour unpaid lunch). Alternate schedules can be arranged with approval.
              </li>
              <li>
                <strong>Absences &amp; Inclement Weather:</strong> Notify your supervisor as soon as possible if you are absent or if inclement weather affects your commute.
              </li>
              <li>
                <strong>Non-Smoking Policy:</strong> Smoking is strictly prohibited in all office areas.
              </li>
              <li>
                <strong>Attire:</strong> Employees are expected to dress in casual business attire that reflects a professional image.
              </li>
              <li>
                <strong>Telephone &amp; Technology Usage:</strong> Office communications and equipment are provided for business use. All activities are subject to monitoring.
              </li>
              <li>
                <strong>Security Policies:</strong> Only approved software may be installed, and no unauthorized hardware changes are permitted.
              </li>
              <li>
                <strong>Cell Phone Reimbursement:</strong> Eligible employees may receive monthly reimbursement for business-related cell phone usage.
              </li>
              <li>
                <strong>Building Access:</strong> All employees receive a building access card which must be returned upon termination.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Compensation &amp; Pay Information">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Pay Period:</strong> Employees are paid twice a month according to a set payroll cycle.
              </li>
              <li>
                <strong>Direct Deposit:</strong> We encourage enrollment in direct deposit for prompt and secure payments.
              </li>
              <li>
                <strong>Overtime:</strong> Non-exempt employees receive overtime pay for any hours worked over 40 per week.
              </li>
              <li>
                <strong>Salary Review:</strong> Annual performance reviews help determine salary adjustments based on performance and other factors.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Health &amp; Welfare Benefits">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Medical &amp; Dental Insurance:</strong> Comprehensive plans are available for full-time employees, with cost-sharing for dependents.
              </li>
              <li>
                <strong>Health Insurance Continuation:</strong> COBRA allows eligible employees to continue coverage at their own expense.
              </li>
              <li>
                <strong>Flexible Spending Account:</strong> Employees may set aside pre-tax dollars for eligible medical and dependent care expenses.
              </li>
              <li>
                <strong>Life &amp; Disability Insurance:</strong> We provide full premium coverage for both life and disability insurance.
              </li>
              <li>
                <strong>401(k) &amp; SmartBenefits®:</strong> Retirement and transit benefits are available with matching contributions.
              </li>
              <li>
                <strong>Workers' Compensation:</strong> Coverage is provided for work-related injuries.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Leave Benefits">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Holidays:</strong> Our offices are closed on federal holidays and other designated days.
              </li>
              <li>
                <strong>Vacation Leave:</strong> Vacation accrues based on years of service with details on carryover limits.
              </li>
              <li>
                <strong>Sick Leave:</strong> Accrued monthly, sick leave can be used when you are ill or for medical appointments.
              </li>
              <li>
                <strong>Personal Days:</strong> Up to two personal days per year are available for personal matters.
              </li>
              <li>
                <strong>Family &amp; Medical Leave:</strong> Leave may be taken for family care or serious health conditions following applicable law.
              </li>
              <li>
                <strong>Maternity/Parental &amp; Bereavement Leave:</strong> Specific leave is provided for family-related events and emergencies.
              </li>
              <li>
                <strong>Additional Leave:</strong> Provisions are available for jury duty, voting, school activities, military service, and unpaid leave.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Performance Guidance">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Annual Performance Reviews:</strong> Reviews are held on each employee’s anniversary to discuss achievements and areas for improvement.
              </li>
              <li>
                <strong>Performance Guidance Actions:</strong> These include verbal or written warnings, probation, suspension, and in severe cases, termination.
              </li>
              <li>
                <strong>Grievance Resolution:</strong> A defined process is in place for resolving any work-related disputes.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Termination of Employment">
          <div className="accordion-content">
            <ul>
              <li>
                <strong>Employment At Will:</strong> All employment is at-will unless otherwise defined by applicable law.
              </li>
              <li>
                <strong>Resignation &amp; Job Abandonment:</strong> Employees are expected to provide written notice of resignation, and unexplained absences may be deemed job abandonment.
              </li>
              <li>
                <strong>Severance &amp; Exit Interviews:</strong> Procedures are in place to ensure proper exit processing and the return of all Maryland LCV property.
              </li>
            </ul>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default HR;
